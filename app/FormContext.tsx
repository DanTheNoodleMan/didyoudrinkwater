import React from "react";

type FormContextType = {
    sex: string;
    age: number;
    weight: number;
    activity: number;
    setSex: (sex: string) => void;
    setAge: (age: number) => void;
    setWeight: (weight: number) => void;
    setActivity: (activity: number) => void;
};

export const FormContext = React.createContext<FormContextType>({
    sex: "",
    age: 0,
    weight: 0,
    activity: 0,
    setSex: () => {},
    setAge: () => {},
    setWeight: () => {},
    setActivity: () => {},
});

type FormProviderProps = {
    children: React.ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {
    const [sex, setSex] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [weight, setWeight] = React.useState(0);
    const [activity, setActivity] = React.useState(0);

    const value = React.useMemo(
        () => ({
            sex,
            age,
            weight,
            activity,
            setSex,
            setAge,
            setWeight,
            setActivity,
        }),
        [sex, age, weight, activity]
    );

    return (
        <FormContext.Provider value={value}>{children}</FormContext.Provider>
    );
};
