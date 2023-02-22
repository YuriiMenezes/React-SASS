
import Avatar from '../img/Yurii.jpeg';
import '../styles/components/sidebar.sass';


const Sidebar = () => {
    return (
    
        <aside id="sidebar">

            <img src={Avatar} alt='Yuri Miranda de Menezes' />
            <p className="title">Desenvolvedor</p>
            <p>Redes Sociais</p>
            <p>Informações de Contato</p>
            <a href="#" className="btn">
                Download Currículo
            </a>


        </aside>

    )
};

export default Sidebar;