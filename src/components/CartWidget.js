import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const CartWidget = () => {
    return (
        <Badge badgeContent={1} color="secondary">
            <ShoppingCartOutlined color="primary" />
        </Badge>
    );
};

export default CartWidget;