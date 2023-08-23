"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ChurchIcon from "@mui/icons-material/Church";
import CakeIcon from "@mui/icons-material/Cake";
import Typography from "@mui/material/Typography";

export default function WeedingTimeline() {
  return (
    <div className="timeline">
      <p>Programa del evento</p>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            3:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <ChurchIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              MISA
            </Typography>
            <a href="https://goo.gl/maps/egJ5kCFjUYpw91pc9" target="_blank">
              <Typography variant="body2" fontSize={"small"}>
                Parroquia de nuestra señora del rosario AV. Virrey de Almanza
                S/N, El Duero
              </Typography>
            </a>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            5:00
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CakeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Recepción
            </Typography>
            <a href="https://goo.gl/maps/nLogzKn67d883LXu8" target="_blank">
              <Typography variant="body2" fontSize={"small"}>
                Lago del Virrey Libramiento Norte S/N, A un costado del 17
                batallón de infanteria 59669
              </Typography>
            </a>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            6:30 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Cena
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <p>No niños</p>
    </div>
  );
}
