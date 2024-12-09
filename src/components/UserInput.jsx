const UserInput = ({ onChange, inputs }) => {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={inputs.initialInvestment} required onChange={(e) => onChange("initialInvestment", e.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={inputs.annualInvestment} required onChange={(e) => onChange("annualInvestment", e.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={inputs.expectedReturn} required onChange={(e) => onChange("expectedReturn", e.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={inputs.duration} onChange={(e) => onChange("duration", e.target.value)} />
                </p>
            </div>
        </section>
    );
};

export default UserInput;