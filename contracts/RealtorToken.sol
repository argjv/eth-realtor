pragma solidity ^0.4.2;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
import './Authentication.sol';

contract RealtorToken is StandardToken, Authentication {
    string public name = "RealtorToken";
    string public symbol = "RT";
    uint8 public decimals = 18;

    uint256 public constant INITIAL_SUPPLY = 1000000;

    function RealtorToken() public {
        // First user is the contract creator.
        signup("First user");
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;

        Transfer(0x0, msg.sender, INITIAL_SUPPLY);
    }
}