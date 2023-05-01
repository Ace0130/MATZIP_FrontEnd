import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <nav>
        <Link to={"/notice"}>공지사항</Link>
        <Link to={"/contract"}>이용약관</Link>
        <Link to={"/contract_non_signup"}>비회원 이용자 이용정책</Link>
        <Link to={"/privacy"}>개인정보 처리방침</Link>
        <Link to={"/location"}>위치기반서비스 이용약관</Link>
        <Link to={"/community_guidelines"}>커뮤니티 가이드라인</Link>
        <Link to={"/contact"}>문의하기</Link>
      </nav>
      <div className="copyright">Copyright ⓒ 2023 by Team.K_BlackCow</div>
    </footer>
  );
};

export default Footer;
