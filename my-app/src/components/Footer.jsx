import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
import Container from 'react-bootstrap/Container';
import '../css/footer.css';

import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary footer fixed-bottom" variant="dark">
        <Container className='footer'> 
        &copy; {new Date().getFullYear()} Copyright:{' good hackers m.A.A.d Exeter'}
        </Container>
      </Navbar>
    );
}

export default Footer;