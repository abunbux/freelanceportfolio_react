import gitHub_black from "./../../img/icons/gitHub_black.svg"

const BtnGitHub = ({link}) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
              <img src={gitHub_black} alt="link github" />
              GitHub repo
            </a>
     );
}
 
export default BtnGitHub;