import React, {useState, useRef, useEffect} from 'react';
import * as echarts from 'echarts/core';
import {LineChart} from 'echarts/charts';
import {GridComponent} from 'echarts/components';
import {SVGRenderer, SkiaChart} from '@wuba/react-native-echarts';
import {hs, ss, vs} from '../../utils/scale';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {ScrollView, StyleSheet} from 'react-native';

echarts.use([SVGRenderer, LineChart, GridComponent]);

export function LineChartComponent() {
  const skiaRef = useRef<any>(null);
  useEffect(() => {
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    };
    let chart: any;
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, 'light', {
        renderer: 'svg',
        width: hs(330),
        height: vs(330),
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, []);

  return <SkiaChart ref={skiaRef} />;
}
