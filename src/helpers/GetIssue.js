import Axios from "axios";
const GetIssue = async (word) => {
  const response = await Axios.get(
    `https://api.github.com/search/issues?q=repo:facebook/react+${word}:in:title`
  ).catch((err) => {});

  const data = response.data.items

  return data.map((value) => {
    const { title, labels } = value;
    return { title, labels } ? { title, labels } : {title:"sin concidencia",labels:"sin concidencia"};
  });
};

export default GetIssue;
