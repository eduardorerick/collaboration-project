import { Outlet } from 'react-router-dom';
import './style.css';

export function Portal() {
	return (
		<section className='portal-section'>
			<div className="left-div">Todo ~</div>

			<div className="right-div">
				<Outlet />
			</div>
		</section>
	);
}
