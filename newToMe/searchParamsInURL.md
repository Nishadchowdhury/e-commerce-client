const searchParams = useSearchParams();

const selectedValue = searchParams.get("paramName"); accessing the params from the URL.

## the case is read the value and set the value in the URL

=> searchParams.toString() => this returns the query object as a string. => sizeId=79662dc7-b28d-4aa4-9d44-100212316bf8

=> queryString.parse("sizeId=79662dc7-b28d-4aa4-9d44-100212316bf8") => in converts the the string to an object => {name: 'Nishad'}.

## the function that does all the steps.

const onClick = (id: string) => {
const current = queryString.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id
        } // it add the newly added filter data to the query object.

        if (current[valueKey] === id) {
            query[valueKey] = null;
        } // in ensures that if user select the same filter twice that the filter will be removed.

        const url = queryString.stringifyUrl({
            url: window.location.href, // it gives the url from the browser
            query // it's the query string
        }, { skipNull: true }); // ti means if any of key holds nullish values then will not add to the url

        router.push(url)
    };

## the way we should style and manipulate the UI.

<!--

 <Button
className={cn(
"rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300 ",
selectedValue === filter.id && "bg-black" ///////////////////////////==============> this line for the dynamic styling.
)}

onClick={() => onClick(filter.id)}
>
    {filter.name}
 <Button/>

 -->
