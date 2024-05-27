/*
 * @Description: 性格测试题目列表
 * @Author: laoyuan
 * @Date: 2024-05-26 16:58:48
 */

import EI_questionList from "./more/EI";
import FT_questionList from "./more/FT";
import JP_questionList from "./more/JP";
import NS_questionList from "./more/NS";

const question = [
  ...EI_questionList,
  ...FT_questionList,
  ...JP_questionList,
  ...NS_questionList,
];

export default question;
