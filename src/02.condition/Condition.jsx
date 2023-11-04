export function Condition() {
    const count = 1;
    return <>
        {count > 1 ?
            <div>Count more than 1</div>
            :
            <div>Count less than 1</div>
        }
    </>;
}
