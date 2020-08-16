module.exports = (fs, appRoot, privateKeyFileName) =>
  function providePrivateKey() {
    const filePath = `${appRoot}/${privateKeyFileName}`;
    const privateKey = fs.readFileSync(filePath);
    return privateKey;
  };
