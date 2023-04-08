### :zap: Components:
1. **📄 Form** : 
- Consists of 3 input tags which takes input for *Movie Name*, *Rating* of the Movie and *Duration* of the Movie. Also consists of a *Submit* button on click of which a *moviedata object* is created. 
```
const movieData = { movie_name, rating, duration, id: nanoid() }
```
- Redux Action is dispatched taking the new data. Finally the state of the *Store* is populated with new data object.  

2. **:mag: Search Input** : Takes the user *query*, compares the query with the name of all available movie objects. Finally provides a filtered list of movie objects matching the query.
```
    const filterList =
        React.useCallback(
            (query: string) => {
                const filterData = [...MovieList].filter(({ name }: { name: string }) => name.includes(query.toLowerCase())
                )
                setFilteredList(filterData)
            }
            , [MovieList]
        )
```

3. **:beers: List view** : Displays those movie objects/elements which matches the query.

4. **:see_no_evil: View Component** : Wrapping all above 3 components.
```
<>
    <Form/>
    <SearchInput/>
    <ListView/>
</>
```

### 📦️ Packages used:
    Tailwindcss
    Redux tool kit

### :triangular_flag_on_post: Features
1. Movies are be deleted on double click.


### 📝 Notes
The **filterList** Function is wrapperd in a callback hook to avoid referential inquality. Hence the search component will not have unnecessary rerenders.

Whenever parent component rerenders the child component also rerender. In case the props of the child component are not changed, it will still unnecessarily rerender due to its parent. To avoid this issue some child components are wrapped in **React.memo()** to avoid them rerendering unnecessarily. React will skip the rerender of that component when its props are not changed.