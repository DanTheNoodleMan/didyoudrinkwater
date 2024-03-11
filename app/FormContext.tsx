import React from "react";

type FormContextType = {
    sex: string;
    age: number;
    weight: number;
    weightMetric: string;
    activity: number;
    setSex: (sex: string) => void;
    setAge: (age: number) => void;
    setWeight: (weight: number) => void;
    setWeightMetric: (weightMetric: string) => void;
    setActivity: (activity: number) => void;
};

export const FormContext = React.createContext<FormContextType>({
    sex: "",
    age: 0,
    weight: 0,
    weightMetric: "KG",
    activity: 0,
    setSex: () => {},
    setAge: () => {},
    setWeight: () => {},
    setWeightMetric: () => {},
    setActivity: () => {},
});

type FormProviderProps = {
    children: React.ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {
    const [sex, setSex] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [weight, setWeight] = React.useState(0);
    const [weightMetric, setWeightMetric] = React.useState("KG");
    const [activity, setActivity] = React.useState(0);

    const value = React.useMemo(
        () => ({
            sex,
            age,
            weight,
            weightMetric,
            activity,
            setSex,
            setAge,
            setWeight,
            setWeightMetric,
            setActivity,
        }),
        [sex, age, weight, weightMetric , activity]
    );

    return (
        <FormContext.Provider value={value}>{children}</FormContext.Provider>
    );
};
