import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useAppSelector } from "../app/hooks";
import {
  selectStatus,
  selectSearchedQuotes,
} from "../features/searchBar/searchBarSlice";
import { selectLang } from "../features/contextMenu/contextMenuSlice";
import { selectQuotesFetchedByTags, selectStatusByTags } from "../features/quote/quoteSlice";
import NoResults from "../common/NoResults";
import Loading from "../common/Loading";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  })
);

function Searched(props) {
  const searchedQuotes = useAppSelector(selectSearchedQuotes);
  const quotesFetchedByTags = useAppSelector(selectQuotesFetchedByTags);
  const status = useAppSelector(selectStatus);
  const statusByTags = useAppSelector(selectStatusByTags);
  const lang = useAppSelector(selectLang);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const getResult = () => {
    const data = quotesFetchedByTags || searchedQuotes
    return (
      <div className={classes.root}>
        {data.map((quote, index) => {
          return (
            <Accordion
              key={quote.id}
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>
                  {quote.title[lang]}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  {quote.author[lang]}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: quote.context[lang] || "",
                  }}
                />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    );
  };

  return status === "loading" || statusByTags === "loading" ? (
    <Loading />
  ) : searchedQuotes.length === 0 && quotesFetchedByTags.length === 0? (
    <NoResults />
  ) : (
    getResult()
  );
}

export default Searched;
