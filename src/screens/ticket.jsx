import { Chart } from '../components/chart';
import ProgressBar from '../components/progressBar';
import Ranking from '../components/ranking';
import TicketShow from '../components/ticketShow';
import img from '../images/me.jpg' ;

export default function Ticket(){ 
    const testData = [
        { bgcolor: "#00695c", completed: 77 },
          ];
    return( 
<div className="row container">
<div className="col-4 pt-1 p-1 border">
  {/* پروفایل کارشناس*/}
<div className="d-flex border border-success rounded p-2 my-3 " style={{justifyContent:'space-between'}}>
<img src={img} className="rounded top-profile-photo" />


<p style={{marginLeft:'20%' , position:'absolute'}}>
  علیرضا اکبری
</p>
<p className="align-self-center"> 
  ماه همکاری
</p>
<p className='rank-number bg-success p-2'>23</p>

</div>

<div className="border p-4 text-center">
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
      <a className='text-decoration-none text-success'>سرعت عملکرد کارشناس</a>
    </div>
<div className="border my-4 p-2 text-center">
<Chart/>
<a className='text-decoration-none text-success'>تیکت های موفق این ماه</a>
</div>
<Ranking/>

</div>

<div className="col-8 border p-5">
  <TicketShow/>
</div>
</div>

        );
}
