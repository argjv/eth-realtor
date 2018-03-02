pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract RealtorToken is StandardToken {
    string public name = 'RealtorToken';
    string public symbol = 'RT';
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 12000;

    function RealtorToken() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}