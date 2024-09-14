import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-3">
      <div className="flex justify-between items-center container mx-auto">
        <h1>All Rights Reserved</h1>

        <div className="flex gap-3 items-center">
         <a href="" target="_blank"><FacebookOutlined className="text-gray-700 hover:text-blue-600" style={{ fontSize: 35  }} /></a> 
         <a href="" target="_blank"><InstagramOutlined className="text-gray-700 hover:text-blue-600" style={{ fontSize: 35  }} /></a> 
         <a href="" target="_blank"><GithubOutlined className="text-gray-700 hover:text-blue-600" style={{ fontSize: 35  }} /></a> 
         <a href="" target="_blank"><YoutubeOutlined className="text-gray-700 hover:text-blue-600" style={{ fontSize: 35  }} /></a> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
