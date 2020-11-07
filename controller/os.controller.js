const os = require("os");

// Define os constraints
const hostname = os.hostname();
const platform = os.platform();
const arch = os.arch();
const cpus = os.cpus();
const interfaces = os.networkInterfaces();
const totalmem = os.totalmem();
const ostype = os.type();
const userinfo = os.userInfo();

const getOsInfo = (req, res) => {
  const uptime = os.uptime();
  const freemem = os.freemem();
  const usedmem = totalmem - freemem;

  // Calculate relative memory params
  const freememRel = (freemem / totalmem).toFixed(2);
  const usedmemRel = (usedmem / totalmem).toFixed(2);

  // Prepare the variables to send.
  const system = {
    hostname,
    platform,
    arch,
    ostype,
    cpus
  }
  const memory = {
    abs: {
      free: freemem,
      used: usedmem,
      total: totalmem
    },
    rel: {
      free: freememRel,
      used: usedmemRel,
    }
  }
  const etc = {
    interfaces,
    userinfo,
    uptime
  }
  res.send({ system, memory, etc })
}

module.exports = { getOsInfo }