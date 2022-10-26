import ProgressBarTickets from './progressBarTickets';

export default function TicketShow () {
    const testData = [
        { bgcolor: "#ee3616", completed: 13 },
          ];

    const secondtestData = [
        { bgcolor:"#f3c80b ", completed: 22 },
        ];       
    
    const thirdtestData = [
            { bgcolor: "#00695c", completed: 36 },
              ];

        return(
       <>
        <div className="border border-success rounded d-inline-block w-100 p-4">
            <a className="bg-primary text-white  text-decoration-none p-2 rounded">IN-140107067777</a>
            <p style={{float:'right' }}>میدان امام خمینی رو به روی خیابان خیام ، بانک سپه پلاک هفت</p>
           <div className="d-flex mt-5" style={{justifyContent:'space-between'}}>
           <p className="bg-danger  text-white  px-5  text-center text-decoration-none p-2 rounded">09304721160</p>
            <p className="bg-danger  text-white  px-5  text-center text-decoration-none p-2 rounded">77780165</p>
           </div>
           <div className="border p-4 text-center border-danger rounded">
      {testData.map((item, idx) => (
        <ProgressBarTickets key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
      <a className='text-decoration-none text-success'>زمان باقی مانده</a>
    </div>
         </div>   



         <div className="border rounded d-inline-block w-100 p-4 my-4 border-success">
            <a className="bg-primary text-white  text-decoration-none p-2 rounded">IN-140107079954</a>
            <p style={{float:'right' }}>فلکه اول تهرانپارس خیابان شاهد بانک اقتصاد نوین</p>
           <div className="d-flex mt-5" style={{justifyContent:'space-between'}}>
           <p className="bg-danger  text-white  px-5  text-center text-decoration-none p-2 rounded">09304721160</p>
            <p className="bg-danger  text-white  px-5  text-center text-decoration-none p-2 rounded">77780165</p>
           </div>
           <div className="border p-4 text-center border-warning rounded">
      {secondtestData.map((item, idx) => (
        <ProgressBarTickets key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
      <a className='text-decoration-none text-success'>زمان باقی مانده</a>
    </div>
         </div>   


         <div className="border rounded d-inline-block w-100 p-4 border-success">
            <a className="bg-primary text-white  text-decoration-none p-2 rounded">IN-140107037777</a>
            <p style={{float:'right' }}>میدان امام خمینی رو به روی خیابان خیام ، بانک سپه پلاک هفت</p>
           <div className="d-flex mt-5" style={{justifyContent:'space-between'}}>
           <p className="bg-danger  text-white  px-5  text-center text-decoration-none p-2 rounded">09304721160</p>
            <p className="bg-danger  text-white  px-5  text-center text-decoration-none p-2 rounded">77780165</p>
           </div>
           <div className="border p-4 text-center border-success rounded">
      {thirdtestData.map((item, idx) => (
        <ProgressBarTickets key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
      <a className='text-decoration-none text-success'>زمان باقی مانده</a>
    </div>
         </div>   

       </>
    );
}








