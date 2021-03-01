const RewardsStrategy = artifacts.require("RewardsStrategy");
const WaultVaultBNB = artifacts.require("WaultVaultBNB");

module.exports = function (deployer) {

  deployer.deploy(RewardsStrategy, "0xFA3CcB086Bf371A2Ff33Db8521Be47c5B4b9d10E", "waultReawardBNB", "maultReaward BNB", 172800);

};
