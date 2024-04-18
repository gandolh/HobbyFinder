'use client'

const BurgerMenu = () => {
    return ( <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
    /> );
}
 
export default BurgerMenu;