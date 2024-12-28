import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useMemo } from "react";
import { debounce } from "lodash";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import UiInput from "@ui/UiInput";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo";

import { getApiResource } from "@utils/network";
import { getPeopleImage, getPeopleId } from "@services/getPeopleData";
import { API_SEARCH } from "@constants/api";

import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = useCallback(
    async (param) => {
      const res = await getApiResource(API_SEARCH + param);

      if (res) {
        const peopleList = res.results.map(({ name, url }) => {
          const id = getPeopleId(url);
          const img = getPeopleImage(id);

          return {
            id,
            name,
            img,
          };
        });

        setPeople(peopleList);
      }

      setErrorApi(!res);
    },
    [setErrorApi]
  );

  useEffect(() => {
    getResponse("");
  }, [getResponse]);

  const debouncedGetResponse = useMemo(
    () => debounce((value) => getResponse(value), 300),
    [getResponse]
  );

  const handleInputChange = useCallback(
    (value) => {
      setInputSearchValue(value);
      debouncedGetResponse(value);
    },
    [debouncedGetResponse]
  );

  // Cleanup debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedGetResponse.cancel();
    };
  }, [debouncedGetResponse]);

  return (
    <>
      <h1 className="header__text">Search</h1>

      <UiInput
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input character's name"
        classes={styles.input__search}
      />

      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
