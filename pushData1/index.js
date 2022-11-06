const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
exports.main = async (event, context) => {
  db.collection('trydb').add({
    data: {
      namei: event.namei,
      "description": event.description,
      tags: event.tags,
      done: event.done
    },
    success: function(res) {
      console.log(res)
    }
  })
  let a = "okk"
  return { sum: a}
}