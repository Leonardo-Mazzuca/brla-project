
import Chart from './Chart';

const Charts: React.FC = () => {


  return (

    <section className='flex justify-between w-full items-center gap-5 flex-wrap pb-10 mt-14'>

  
      <Chart
      id='dolar-chart'
      background='bg-gradient-to-r from-[#F0F0F0] via-[#E5E5E5] to-[#CFCFCF]'
      values={[5.10,5.05,5.00,4.95,4.90,4.85]}
      date={['03/23','03/23','03/23','03/23','03/23','03/23',]}
      flag='/eua-flag.svg'
      heading='1 USD Dollar  = '
      subHeading='5.0449078 Brazillian Real'
      textHeading='1 BRL = 0.198220 USD'
      />


        <Chart
        id='euro-chart'
        background='bg-gradient-to-r from-green-50 via-green-50 to-green-100'
        values={[5.10,5.05,5.00,4.95,4.90,4.85]}
        date={['03/23','03/23','03/23','03/23','03/23','03/23',]}
        flag='/euro-flag.svg'
        heading='1 EURO  = '
        subHeading='6.0449078 Brazillian Real'
        textHeading='1 BRL = 0.198220 EURO'
        />

   


    </section>

  );

};

export default Charts;
