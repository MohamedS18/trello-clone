export const boardDataLists : ListType[] = [
  {
    id: 1706499000001,
    name: "To Do",
    tasks: [
      {
        id: 1706500012345,
        description: "Go to Mosque",
        isCompleted: true,
      },
      {
        id: 1706500023456,
        description: "Buy groceries",
        isCompleted: false,
      },
    ],
  },
  {
    id: 1706499000002,
    name: "In Progress",
    tasks: [
      {
        id: 1706500034567,
        description: "Finish React Trello clone",
        isCompleted: false,
      },
    ],
  },
  {
    id: 1706499000003,
    name: "Done",
    tasks: [
      {
        id: 1706500045678,
        description: "Review pull requests",
        isCompleted: true,
      },
    ],
  },
];

// localStorage.setItem("listData", JSON.stringify(boardDataLists));

export type ListType = {
  id: number,
  name: string,
  tasks: taskType[]
}

export type taskType = {
  id: number,
  description: string,
  isCompleted:boolean
}

export function getData(): ListType[] {
  return JSON.parse(localStorage.getItem("listData") ?? "");
}
