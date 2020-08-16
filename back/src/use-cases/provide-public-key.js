module.exports = (fs, appRoot, publicKeyFileName) =>
  function providePublicKey() {
    const filePath = `${appRoot}/${publicKeyFileName}`;
    const publicKey = fs.readFileSync(filePath);
    return publicKey;
  };
