const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        DB: "mongodb+srv://SebAlam:Mmilo123@cluster0.lb1qj.mongodb.net/bookit?retryWrites=true&w=majority",
      },
    }
  }
  return {
    env: {
      DB: "mongodb+srv://SebAlam:Mmilo123@cluster0.lb1qj.mongodb.net/bookit?retryWrites=true&w=majority",
    },
  }
}
