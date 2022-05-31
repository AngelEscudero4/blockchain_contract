// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZEPToken is ERC20 {

    constructor(uint256 initialSupply) ERC20("ZEPToken", "ZEP") {
        _mint(msg.sender, initialSupply);
    }

    function transferFrom(address from,address to,uint256 amount) public override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        // ToDo see whitelist, in case not there then revoke transaction
        _transfer(from, to, amount);

        // require(from != address(0), "ERC20: transfer from the zero address");
    
        return true;
    }
}
