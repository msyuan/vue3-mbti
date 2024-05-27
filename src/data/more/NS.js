/*
 * @Description: NS-性格测试题目列表
 * @Author: laoyuan
 * @Date: 2024-05-26 16:58:48
 */
const questionList = [
  {
    question: "你倾向通过以下哪种方式收集信息",
    options: [
      {
        text: "你对有可能发生之事的想像和期望",
        value: "N",
      },
      {
        text: "你对目前状况的实际认知",
        value: "S",
      },
    ],
  },
  {
    question: "你倾向相信",
    options: [
      {
        text: "你的直觉",
        value: "N",
      },
      {
        text: "你直接的观察和现成的经验",
        value: "S",
      },
    ],
  },
  {
    question: "当你置身于一段关系中时，你倾向相信",
    options: [
      {
        text: "永远有进步的空间",
        value: "N",
      },
      {
        text: "若它没有被破坏，不予修补",
        value: "S",
      },
    ],
  },
  {
    question: "当你对一个约会觉得放心时，你偏向谈论",
    options: [
      {
        text: "未来，关于改进或发明事物和生活的种种可能性。例如，你也许会谈论一个新的科学发明，或一个更好的方法来表达你的感受",
        value: "N",
      },
      {
        text: "实际的、具体的、关于“此时此地”的事物。例如，你也许会谈论品酒的好方法，或你即将要参加的新奇旅程",
        value: "S",
      },
    ],
  },
];

export default questionList;
