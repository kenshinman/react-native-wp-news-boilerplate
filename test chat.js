var messages = [
  {
    id: 1,
    user: "Ryan Smith",
    text: "This is an example of JSON",
    timeStamp: new Date("13 Jun 2018, 17:42")
  },
  {
    id: 2,
    user: "Kay Baba",
    text: "Here is another Element",
    timeStamp: new Date("14 Jun 2018, 5:42")
  },
  {
    id: 3,
    user: "Kay Baba",
    text: "Here is another Element",
    timeStamp: new Date("14 Jun 2018, 7:42")
  },
  {
    id: 4,
    user: "Ryan Smith",
    text: "Here is another Element",
    timeStamp: new Date("16 Jun 2018, 7:42")
  },
  {
    id: 5,
    user: "Ryan Smith",
    text: "Here is another Element",
    timeStamp: new Date("16 Jun 2018, 7:42")
  },
  {
    id: 6,
    user: "Ryan Smith",
    text: "Here is another Element",
    timeStamp: new Date("17 Jun 2018, 7:42")
  }
];

messages.forEach((m, i, arr) => {
  if (i === 0) {
    console.log(`${m.timeStamp.getDate()}: ${m.text}`);
  }

  if (arr[i - 1]) {
    if (m.timeStamp.getDate() === arr[i - 1].timeStamp.getDate()) {
      //if current item has the same date as item before it, no date
      console.log(m.text);
    }

    if (m.timeStamp.getDate() !== arr[i - 1].timeStamp.getDate()) {
      //if current item has the same date as item before it, no date
      console.log(`${m.timeStamp.getDate()}: ${m.text}`);
    }
  }
});
