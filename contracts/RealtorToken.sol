pragma solidity ^0.4.2;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
import './Authentication.sol';

contract RealtorToken is StandardToken, Authentication {
    string public name = "RealtorToken";
    string public symbol = "RT";
    uint8 public decimals = 18;
    // First param is the property id and second one is the owners wallet address
    mapping (string => address) private properties;

    uint256 public constant INITIAL_SUPPLY = 1000000;

    event PropertyRegistered(string propertyId, address owner);

    function RealtorToken() public {
        // First user is the contract creator.
        signup("First user");
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;

        Transfer(0x0, msg.sender, INITIAL_SUPPLY);
    }

    function registerProperty(string propertyId) public {
        // TODO: Verify the user exists in the database.
        // TODO: Verify the property is not registered already.
        properties[propertyId] = msg.sender;
        PropertyRegistered(propertyId, msg.sender);
    }
}