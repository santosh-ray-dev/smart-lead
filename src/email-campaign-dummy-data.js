function getRandomUniqueValue(existingValues, maxValue) {
    let randomValue;
    do {
      randomValue = Math.floor(Math.random() * maxValue) + 1;
    } while (existingValues.includes(randomValue));
    return randomValue;
  }
  
  const testData = [
    {
      company_detail: {
        total_Progress: getRandomUniqueValue([], 100),
        client_name: "Untitled Campaign 1",
        date: '15 Apr 2023',
        status: "Sent",
        sequence: getRandomUniqueValue([], 10),
      },
      report: {
        sent: {
          count: getRandomUniqueValue([], 500),
          percentage: "0",
        },
        click: {
          count: getRandomUniqueValue([], 500),
          percentage: '30%',
        },
        opened: {
          count: getRandomUniqueValue([], 500),
          percentage: '30%',
        },
        replied: {
          count: getRandomUniqueValue([], 500),
          percentage: '30%',
        },
        positive_reply: {
          count: getRandomUniqueValue([], 500),
          percentage: '30%',
        }
      }
    },
    {
      company_detail: {
        total_Progress: getRandomUniqueValue([], 100),
        client_name: "Untitled Campaign 2",
        date: '20 Apr 2023',
        status: "Draft",
        sequence: getRandomUniqueValue([], 10),
      },
      report: {
        sent: {
          count: getRandomUniqueValue([], 500),
          percentage: "0",
        },
        click: {
          count: getRandomUniqueValue([], 500),
          percentage: '40%',
        },
        opened: {
          count: getRandomUniqueValue([], 500),
          percentage: '40%',
        },
        replied: {
          count: getRandomUniqueValue([], 500),
          percentage: '40%',
        },
        positive_reply: {
          count: getRandomUniqueValue([], 500),
          percentage: '40%',
        }
      }
    },
    {
      company_detail: {
        total_Progress: getRandomUniqueValue([], 100),
        client_name: "Untitled Campaign 3",
        date: '25 Apr 2023',
        status: "Sent",
        sequence: getRandomUniqueValue([], 10),
      },
      report: {
        sent: {
          count: getRandomUniqueValue([], 500),
          percentage: "0",
        },
        click: {
          count: getRandomUniqueValue([], 500),
          percentage: '50%',
        },
        opened: {
          count: getRandomUniqueValue([], 500),
          percentage: '50%',
        },
        replied: {
          count: getRandomUniqueValue([], 500),
          percentage: '50%',
        },
        positive_reply: {
          count: getRandomUniqueValue([], 500),
          percentage: '50%',
        }
      }
    }
  ];
  
  export default testData;
  