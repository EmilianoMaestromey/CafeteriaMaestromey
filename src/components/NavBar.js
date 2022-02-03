import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Coffee & Beer</a>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-light">Categoría 1</button>
                        <button type="button" class="btn btn-outline-light">Categoría 2</button>
                        <button type="button" class="btn btn-outline-light">Categoría 3</button>
                        <button type="button" class="btn btn-outline-light">Categoría 4</button>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </>
    );
};

export default NavBar;