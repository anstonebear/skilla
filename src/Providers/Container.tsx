import React, { FC } from 'react'

const Container: FC<React.PropsWithChildren> = ({ children }) => {
	return <div className='container'>{children}</div>
}

export default Container
