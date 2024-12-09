import React, {FC} from 'react';


type IProps={
    children: React.ReactNode
}

const Layout:FC<IProps> = ({children}) => {
    return (
        <div>

            {children}
        </div>
    );
};

export default Layout;