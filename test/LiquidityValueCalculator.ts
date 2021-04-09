import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { LiquidityValueCalculator } from '../typechain/LiquidityValueCalculator'
import { expect } from 'chai'
import { ethers } from 'hardhat'

const UniswapV2FactoryAddress: string = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

describe('LiquidityValueCalculator contract', () => {
  let liquidityValueCalculator: LiquidityValueCalculator
  let owner: SignerWithAddress
  let addr1: SignerWithAddress
  let addr2: SignerWithAddress

  beforeEach('deploy', async () => {
    [owner, addr1, addr2] = await ethers.getSigners();

    const LiquidityValueCalculator = await ethers.getContractFactory('LiquidityValueCalculator')
    liquidityValueCalculator = (await LiquidityValueCalculator.deploy(UniswapV2FactoryAddress)) as LiquidityValueCalculator
  })

  it('LiquidityValueCalculator contract is deployed', async () => {
    expect(liquidityValueCalculator.address).to.not.be.undefined;
  })

  it('Test LiquidityValueCalculator', async () => {
    await liquidityValueCalculator.pairInfo('0x6b175474e89094c44da98b954eedeac495271d0f', '0x6b175474e89094c44da98b954eedeac495271d0f', {gasLimit: 250000, gasPrice: 100000})
  })
/*
  it('Swap contract has the correct initial values', async () => {
    let totalSupply: BigNumber = await sampleToken.totalSupply()
    let balance: BigNumber = await sampleToken.balanceOf(owner.address)

    expect(await sampleToken.name()).to.equal('Sample Token')
    expect(await sampleToken.symbol()).to.equal('SMP')
    expect(await sampleToken.decimals()).to.equal(18)
    expect(totalSupply).to.equal(balance)
  })

  it('Test swap', async () => {
    await swap.swapETHForExactTokens(sampleToken.address, 100000 , 10, 1000)
  })
*/
})
