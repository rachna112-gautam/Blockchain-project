//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.1;

// steps
//  1. Register User by paying entry entryFees 0.01 (working fine)
//  2. Transfer 80% directly to invitor
//  3. Buy level if previous level is already buyed
//  4. After completeing 1 level auto upgrade to nex level
//  5. When upgrading level pay 8% to all uplines and 20% to direct inviter

contract MLM {
    address public ownerWallet;
    uint256 public totalUsers;
    uint256 public mainWallet;
    uint256 public personalWallet;
    uint256 public rewardWallet;

    struct User {
        uint256 id;
        uint256 balanceReceived;
        address inviter;
        address[] uplines;
        address[] referrals;
        uint256 uplinesSize;
        uint256 level;
        uint256 paymentReceivedFor;
        uint256 retopupWallet;
        uint256 levelsPurchased;
        uint256 autoBuyLevelWallet;
        bool isExist;
    }

    uint256[] public levels;
    uint256 public entryFees;

    mapping(address => User) public users;
    mapping(uint256 => address) public users_ids;

    event Register(address indexed addr, address indexed inviter, uint256 id);
    event BuyLevel(
        address indexed addr,
        address indexed upline,
        uint8 level,
        uint40 expires
    );
    event buyLevelEvent(address indexed _user, uint256 _level, uint256 _time);

    constructor() public {
        totalUsers = 0;
        entryFees = 0.01 ether;
        ownerWallet = msg.sender;
        levels.push(0.01 ether);
        levels.push(0.025 ether);
        levels.push(0.005 ether);
        levels.push(0.075 ether);
        levels.push(0.100 ether);
        levels.push(0.125 ether);
        levels.push(0.150 ether);
        levels.push(0.175 ether);
        levels.push(0.200 ether);
        levels.push(0.225 ether);
        levels.push(0.250 ether);
        newUser(msg.sender, address(0));
        users[msg.sender].levelsPurchased = 10;
        users[msg.sender].isExist = true;
    }

    function newUser(address _addr, address _inviter) private {
        totalUsers++;
        users[_addr].id = totalUsers;
        users[_addr].inviter = _inviter;
        users_ids[totalUsers] = _addr;
        users[_addr].level = 0;
        users[_inviter].referrals.push(_addr);
        users[_addr].uplines.push(_inviter);
        for (uint256 i = 0; i != users[_inviter].uplines.length; i++) {
            users[_addr].uplines.push(users[_inviter].uplines[i]);
        }
        users[msg.sender].levelsPurchased = 0;
        emit Register(_addr, _inviter, totalUsers);
    }

    function _register(
        address _user,
        address _inviter,
        uint256 _value
    ) private {
        require(users[_user].id == 0, "User arleady registered");
        require(users[_inviter].id != 0, "Upline not registered");
        require(_value >= entryFees, "Insufficient funds");
        mainWallet += (entryFees * 20) / 100;
        uint256 referalMoney = (entryFees * 80) / 100;
        users[_inviter].balanceReceived += (referalMoney -
            (referalMoney * 20) /
            100);
        mainWallet += (referalMoney * 20) / 100;
        users[_user].retopupWallet += (referalMoney * 10) / 100;
        users[_user].autoBuyLevelWallet += (referalMoney * 10) / 100;
        newUser(_user, _inviter);
        users[msg.sender].isExist = true;
    }

    function register(uint256 _inviter_id) external payable {
        _register(msg.sender, users_ids[_inviter_id], msg.value);
    }

    function buyLevel(uint256 _level) public payable {
        require(users[msg.sender].isExist, "User not exist");
        require(_level > 0 && _level <= 10, "Incorrect level");

        if (_level == 1) {
            require(msg.value == levels[1], "Incorrect Value");
        } else {
            require(msg.value == levels[_level], "Incorrect Value");
            require(
                users[msg.sender].level == _level - 1,
                "You haven't purchased previous level yet"
            );
        }

        // Transfer 20% to direct sponsor
        address(uint256(users[msg.sender].inviter)).transfer(
            (levels[_level] * 20) / 100
        );
        if (users[msg.sender].level + 1 < 10) users[msg.sender].level += 1;

        users[msg.sender].levelsPurchased += 1;

        //80% distribution isleft
        //
        emit buyLevelEvent(msg.sender, _level, now);
    }

    function autoBuyLevel() public {
        // find the current level of user
        uint256 _levelPurchased = users[msg.sender].levelsPurchased + 1;
        // if user have previous level then buy next level automatically
        require(users[msg.sender].isExist, "User not exist");
        require(
            _levelPurchased > 0 && _levelPurchased <= 10,
            "Incorrect level"
        );

        if (_levelPurchased == 1) {
            require(
                users[msg.sender].autoBuyLevelWallet >= levels[1],
                "Incorrect Value"
            );
        } else {
            require(
                users[msg.sender].autoBuyLevelWallet >= levels[_levelPurchased],
                "Incorrect Value"
            );
        }

        // Transfer 20% to direct sponsor
        address(uint256(users[msg.sender].inviter)).transfer(
            (levels[_levelPurchased] * 20) / 100
        );
        if (users[msg.sender].level + 1 < 10) users[msg.sender].level += 1;

        users[msg.sender].autoBuyLevelWallet -= levels[_levelPurchased];
        users[msg.sender].levelsPurchased += 1;
        emit buyLevelEvent(msg.sender, _levelPurchased, now);
    }

    function getCurrentLevel(address _add) public view returns (uint256) {
        return users[_add].level;
    }

    function getBalance(address _add) public view returns (uint256) {
        return users[_add].balanceReceived;
    }

    function getPaymentReceivedFor(address _add) public view returns (uint256) {
        return users[_add].paymentReceivedFor;
    }

    function getReferrals(address _add) public view returns (address[] memory) {
        return users[_add].referrals;
    }

    function getUplines(address _add) public view returns (address[] memory) {
        return users[_add].uplines;
    }

    function retopUp() public {
        if (users[msg.sender].retopupWallet >= entryFees) {
            users[msg.sender].retopupWallet -= entryFees;
            mainWallet += (entryFees * 20) / 100;
            uint256 referalMoney = (entryFees * 80) / 100;
            address _inviter = users[msg.sender].inviter;
            users[_inviter].balanceReceived += (referalMoney -
                (referalMoney * 20) /
                100);
            mainWallet += (referalMoney * 20) / 100;
            users[msg.sender].retopupWallet += (referalMoney * 10) / 100;
            users[msg.sender].autoBuyLevelWallet += (referalMoney * 10) / 100;
        }
    }

    function giveReward(
        address _winner1,
        address _winner2,
        address _winner3
    ) public {
        uint256 first = (50 * mainWallet) / 100;
        uint256 second = (30 * mainWallet) / 100;
        uint256 third = (20 * mainWallet) / 100;
        address(uint256(_winner1)).transfer(first);
        address(uint256(_winner2)).transfer(second);
        address(uint256(_winner3)).transfer(third);
        mainWallet = 0;
    }
}