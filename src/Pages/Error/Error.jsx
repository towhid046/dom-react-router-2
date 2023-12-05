import error from './../../assets/images/error_img.png'
import { Link } from 'react-router-dom';
export default function Error() {

  return (
    <>
    <div style={{textAlign:'center'}}>
     <p> <Link to={'/'}><button className='mb_20 fz_18 bg_secondary br_5 p_5 px_20 pointer'>Back to home</button></Link> </p>
      <img src={error} alt="" />
    </div>
    </>
  )
}

