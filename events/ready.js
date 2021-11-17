module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`Prefix l. |MADE BY Ano Gaming YT#5457 [https://discord.gg/btngw4vaTM]`, {
    type: "STREAMING",
  });
};
