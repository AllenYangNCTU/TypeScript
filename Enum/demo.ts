enum Status {
  OFFLINE,
  ONLINE,
  DELETED,
}
console.log(Status.OFFLINE);
console.log(Status.ONLINE);
console.log(Status.DELETED);

console.log(Status[0]);
console.log(Status[1]);
console.log(Status[2]);

// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2,
// };

function getResult(status: any) {
  if (status === Status.OFFLINE) {
    return "offline";
  } else if (status === Status.ONLINE) {
    return "online";
  } else if (status === Status.DELETED) {
    return "deleted";
  }
  return "error";
}
const result = getResult(Status.OFFLINE);
console.log(result);
