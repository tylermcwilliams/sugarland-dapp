<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 255, 255, 0.4)");
    this.gradient.addColorStop(1, "rgba(172, 103, 230, 0.5)");

    this.renderChart(
      {
        labels: [
          "3:00 AM",
          "6:00 AM",
          "9:00 AM",
          "12:00 AM",
          "3:00 PM",
          "6:00 AM",
          "9:00 AM",
        ],
        datasets: [
          {
            fill: "origin",
            label: "$Sugar Price",
            data: [2, 10, 5, 9, 0, 6, 20],
            backgroundColor: this.gradient,
            borderColor: "rgba(255, 255, 255, 0.4)",
            pointBackgroundColor: "rgba(255, 255, 255, 1)",
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          x: {
            grid: {
              color: "transparent",
              borderWidth: 10,
              display: false,
              tickWidth: 0,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
        title: {
          display: false,
          text: "Sugarland Chart",
        },
      }
    );
  },
};
</script>

