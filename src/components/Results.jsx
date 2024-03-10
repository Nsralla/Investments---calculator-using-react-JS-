import {calculateInvestmentResults, formatter} from '../util/investment.js'
export default function Results({userInputs}) {
    const data = calculateInvestmentResults(userInputs);

    const initalInv = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
    
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interests</th>
                    <th>Inversted Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data_of_each_year)=>{
                    const totalInterset = data_of_each_year.valueEndOfYear - data_of_each_year.annualInvestment*data_of_each_year.year - initalInv;
                    const totalAmountInvested =
                        data_of_each_year.valueEndOfYear - totalInterset;
                    return (
                        <tr key={data_of_each_year.year}>
                            <td>{data_of_each_year.year}</td>
                            <td>
                            {formatter.format(data_of_each_year.valueEndOfYear)}
                            </td>
                            <td>{formatter.format(data_of_each_year.interest)}</td>
                            <td>{formatter.format(totalInterset)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                        );
                })}
            </tbody>
        </table>
    );
}
