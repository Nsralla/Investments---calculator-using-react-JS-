

export default function UserInput({handleChange, userInputs}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input value={userInputs.initialInvestment} type="number" required onChange={
                        (event)=>{
                            handleChange("initialInvestment",event.target.value);
                        }
                    } />
                </p>

                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input value={userInputs.annualInvestment} type="number" required
                        onChange={
                            (event)=>{
                                handleChange("annualInvestment",event.target.value
                                );
                            }
                        }  />
                </p>
            </div>


            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input value={userInputs.expectedReturn} type="number" required
                        onChange={
                            (event)=>{
                                handleChange("expectedReturn",event.target.value);
                            }
                        }  />
                </p>

                <p>
                    <label htmlFor="">Duration</label>
                    <input min={1} value={userInputs.duration} type="number" required 
                        onChange={
                        (event)=>{
                            handleChange("duration", event.target.value);
                        }
                    }  />
                </p>
            </div>
        </section>
    );
};