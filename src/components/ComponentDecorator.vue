<script>
import { computed, defineComponent, h } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true
    },
    transformer: {
      type: Function,
      default: (rawData) => rawData
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    if (!slots.default) return () => '空的';
    console.log(slots.default());
    const store = useStore();

    const rawData = computed(() => store.state.components.get(props.id) ?? null);

    const data = computed(() => props.transformer(rawData.value));

    const onClickWrapper = (cb) =>
      (e) => {
        console.log(e)
        emit('click', e);
        store.commit('setActiveComponent', props.id);
        if (cb) cb(e);
      };

    return () =>
      slots.default({ data: data.value })
        .map(
          comp => h(
            comp.type,
            {
              ...comp.props,
              onClick: onClickWrapper(comp.props /* 处理注释节点没有props */  && comp.props.onClick)
            },
            comp.children
          )
        );
  }
});
</script>
