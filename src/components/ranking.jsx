import img from '../images/me.jpg' ;
import logo from '../images/logo.jpg' ;

export default function Ranking(){ 
    return( 
    <>
    <p className='text-center'>برترین کارکنان بر حسب تیکت های موفق</p>
<div className="d-flex border border-success rounded p-2 my-3 " style={{justifyContent:'space-between'}}>
<img src={img} className="profile-photo" />
<p className="align-self-center">علیرضا اکبری</p>
<p className='rank-number bg-success p-2'>44</p>
</div>

<div className="d-flex border border-success rounded p-2 my-3 " style={{justifyContent:'space-between'}}>
<img src={logo} className="profile-photo" />
<p className="align-self-center">جواد لباف</p>
<p className='rank-number bg-success p-2'>40</p>
</div>


<div className="d-flex border border-success rounded p-2 my-2" style={{justifyContent:'space-between'}}>
<img src={logo} className="profile-photo" />
<p className="align-self-center">محمد آقایی</p>
<p className='rank-number bg-success p-2'>36</p>
</div>


<div className="d-flex border border-success rounded p-2 my-2" style={{justifyContent:'space-between'}}>
<img src={logo} className="profile-photo" />
<p className="align-self-center">امیرحسین فروتن</p>
<p className='rank-number bg-success p-2'>31    </p>
</div>


<div className="d-flex border border-success rounded p-2 my-2" style={{justifyContent:'space-between'}}>
<img src={logo} className="profile-photo" />
<p className="align-self-center">عرشیا حسینی</p>
<p className='rank-number bg-success p-2'>27</p>
</div>



<div className="d-flex border border-success rounded p-2 my-2" style={{justifyContent:'space-between'}}>
<img src={logo} className="profile-photo" />
<p className="align-self-center">میثم فرزادی</p>
<p className='rank-number bg-success p-2'>22</p>
</div>
    </>

        );
}

