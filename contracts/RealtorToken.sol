pragma solidity ^0.4.2;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
import './Authentication.sol';

contract RealtorToken is StandardToken, Authentication {
    string public name = "RealtorToken";
    string public symbol = "RT";
    uint8 public decimals = 18;
    struct Property {
        address owner;
        uint256 price;
        // Valid state numbers are:
        // 0: Off market
        // 1: On market
        // 2: Pending
        uint8 state;
    }
    struct Offer {
        string propertyId;
        uint256 offer;
        uint256 submittedAtBlockNumber;
        uint256 acceptedAtBlockNumber;
    }
    // First param is the property id and second one is the property details
    mapping (string => Property) private properties;
    // The first param is the address of the buyer. A buyer can only make an
    // offer to one property at a time.
    mapping (address => Offer) private offers;

    uint256 public constant INITIAL_SUPPLY = 1000000;

    event PropertyUpdated(string propertyId, address owner);

    modifier onlyOffMarket(string propertyId) {
        // Only properties in Off market state.
        require(properties[propertyId].state == 0);
        _;
    }

    modifier onlyOnMarket(string propertyId) {
        // Only properties in On market state.
        require(properties[propertyId].state == 1);
        _;
    }

    modifier onlyPending(string propertyId) {
        // Only properties in On market state.
        require(properties[propertyId].state == 2);
        _;
    }

    function RealtorToken() public {
        // First user is the contract creator.
        signup("First user");
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;

        Transfer(0x0, msg.sender, INITIAL_SUPPLY);
    }

    function registerProperty(string propertyId, uint256 propertyPrice) public {
        // TODO: Verify the user exists in the database.
        // TODO: Verify the property is not registered already.
        properties[propertyId].owner = msg.sender;
        properties[propertyId].price = propertyPrice;
        properties[propertyId].state = 0;
        PropertyUpdated(propertyId, msg.sender);
    }

    function publish(string propertyId) public onlyOffMarket(propertyId) {
        properties[propertyId].state = 1;
        PropertyUpdated(propertyId, msg.sender);
    }

    function unpublish(string propertyId) public onlyOnMarket(propertyId) {
        properties[propertyId].state = 0;
        PropertyUpdated(propertyId, msg.sender);
    }

    function submitOffer(string propertyId, uint256 offer) public onlyOnMarket(propertyId) {
        // The buyer has enough tokens for the offer
        require(balances[msg.sender] >= offer);
        // The buyer haven't submitted an offer yet
        require(!(offers[msg.sender].offer > 0));
        // The buyer is not the owner
        require(!(properties[propertyId].owner == msg.sender));
        // Remove the funds from the buyer
        balances[msg.sender] -= offer;
        // Register the offer
        offers[msg.sender].propertyId = propertyId;
        offers[msg.sender].offer = offer;
        offers[msg.sender].submittedAtBlockNumber = block.number;
        // Change the state of the property to Pending
        properties[propertyId].state = 2;
        PropertyUpdated(propertyId, msg.sender);
    }
}