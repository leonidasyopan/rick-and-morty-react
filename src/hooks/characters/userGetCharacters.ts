import { gql, useQuery } from "@apollo/client";

import { Pagination } from "../../common/interfaces/pagination.interface";
// import { Filter } from "../../common/interfaces/filter.interface";

const GET_CHARACTERS_QUERY = gql`
  # query GetCharacters($page: Int, $filter: Object) {
  #   characters(page: $page, filter: $filter) {
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        species
        image
      }
    }
  }
`;
// export const useGetCharacters = (): Pagination | undefined | boolean | string => {
export const useGetCharacters = (): Pagination => {
  const {
    data,
    loading,
    error
  } = useQuery(
    GET_CHARACTERS_QUERY,
    {
      variables: {
        page: 1,
        // filter:  {
        //   name: ""
        // }
      }
    }
  )

  const characters = data?.characters

  // if (error) return 'There was an error, please try again'
  // if (loading || !data) return true;

  return characters;
}
