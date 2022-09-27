//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Trade3Minter is ERC721 {
  uint256 private lastGeneratedTokenId = 0;

    struct Trade3Token {
      uint256 tokenId;
      string tokenURI;
      address owner;
    }

    event TokenMinted(
    uint256 tokenId,
    string tokenURI,
    address owner
    );

  mapping (address => uint256[]) private tokensSupplied;
  mapping(uint256 => Trade3Token) private tokenURIs;

  constructor() ERC721("Trade3Minter", "T3M") { }

  function mint(address _to, string memory _tokenURI) public {
    lastGeneratedTokenId++;

    require(tokenURIs[lastGeneratedTokenId].owner == address(0));

    _mint(_to, lastGeneratedTokenId);

    Trade3Token memory generatedToken = Trade3Token(lastGeneratedTokenId, _tokenURI, _to);

    tokensSupplied[_to].push(lastGeneratedTokenId);

    tokenURIs[lastGeneratedTokenId] = generatedToken;

    emit TokenMinted(lastGeneratedTokenId, _tokenURI, _to);
  }
}